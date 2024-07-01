
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeEight from "../../src/components/MdiClockTimeEight.vue";

test("MdiClockTimeEight snapshot", () => {
  const wrapper = mount(MdiClockTimeEight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
