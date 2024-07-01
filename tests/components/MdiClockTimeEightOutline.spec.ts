
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeEightOutline from "../../src/components/MdiClockTimeEightOutline.vue";

test("MdiClockTimeEightOutline snapshot", () => {
  const wrapper = mount(MdiClockTimeEightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
