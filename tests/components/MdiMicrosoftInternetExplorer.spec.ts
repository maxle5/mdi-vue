
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftInternetExplorer from "../../src/components/MdiMicrosoftInternetExplorer.vue";

test("MdiMicrosoftInternetExplorer snapshot", () => {
  const wrapper = mount(MdiMicrosoftInternetExplorer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
