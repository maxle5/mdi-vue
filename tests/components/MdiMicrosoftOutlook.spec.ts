
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftOutlook from "../../src/components/MdiMicrosoftOutlook.vue";

test("MdiMicrosoftOutlook snapshot", () => {
  const wrapper = mount(MdiMicrosoftOutlook, {});
  expect(wrapper.html()).toMatchSnapshot();
});
