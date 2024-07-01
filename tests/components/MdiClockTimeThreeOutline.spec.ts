
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeThreeOutline from "../../src/components/MdiClockTimeThreeOutline.vue";

test("MdiClockTimeThreeOutline snapshot", () => {
  const wrapper = mount(MdiClockTimeThreeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
