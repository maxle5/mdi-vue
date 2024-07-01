
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeThree from "../../src/components/MdiClockTimeThree.vue";

test("MdiClockTimeThree snapshot", () => {
  const wrapper = mount(MdiClockTimeThree, {});
  expect(wrapper.html()).toMatchSnapshot();
});
