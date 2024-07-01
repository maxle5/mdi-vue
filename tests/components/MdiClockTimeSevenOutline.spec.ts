
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeSevenOutline from "../../src/components/MdiClockTimeSevenOutline.vue";

test("MdiClockTimeSevenOutline snapshot", () => {
  const wrapper = mount(MdiClockTimeSevenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
