
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignPole from "../../src/components/MdiSignPole.vue";

test("MdiSignPole snapshot", () => {
  const wrapper = mount(MdiSignPole, {});
  expect(wrapper.html()).toMatchSnapshot();
});
