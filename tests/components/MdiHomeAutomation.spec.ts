
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeAutomation from "../../src/components/MdiHomeAutomation.vue";

test("MdiHomeAutomation snapshot", () => {
  const wrapper = mount(MdiHomeAutomation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
