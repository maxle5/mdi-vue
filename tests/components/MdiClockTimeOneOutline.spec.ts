
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeOneOutline from "../../src/components/MdiClockTimeOneOutline.vue";

test("MdiClockTimeOneOutline snapshot", () => {
  const wrapper = mount(MdiClockTimeOneOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
