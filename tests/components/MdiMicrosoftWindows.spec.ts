
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftWindows from "../../src/components/MdiMicrosoftWindows.vue";

test("MdiMicrosoftWindows snapshot", () => {
  const wrapper = mount(MdiMicrosoftWindows, {});
  expect(wrapper.html()).toMatchSnapshot();
});
