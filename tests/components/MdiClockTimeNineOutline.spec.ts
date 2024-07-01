
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeNineOutline from "../../src/components/MdiClockTimeNineOutline.vue";

test("MdiClockTimeNineOutline snapshot", () => {
  const wrapper = mount(MdiClockTimeNineOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
