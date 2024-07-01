
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeTwo from "../../src/components/MdiClockTimeTwo.vue";

test("MdiClockTimeTwo snapshot", () => {
  const wrapper = mount(MdiClockTimeTwo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
