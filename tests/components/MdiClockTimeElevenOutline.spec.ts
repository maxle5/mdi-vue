
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeElevenOutline from "../../src/components/MdiClockTimeElevenOutline.vue";

test("MdiClockTimeElevenOutline snapshot", () => {
  const wrapper = mount(MdiClockTimeElevenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
