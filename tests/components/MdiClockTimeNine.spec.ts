
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeNine from "../../src/components/MdiClockTimeNine.vue";

test("MdiClockTimeNine snapshot", () => {
  const wrapper = mount(MdiClockTimeNine, {});
  expect(wrapper.html()).toMatchSnapshot();
});
