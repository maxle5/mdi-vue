
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPacMan from "../../src/components/MdiPacMan.vue";

test("MdiPacMan snapshot", () => {
  const wrapper = mount(MdiPacMan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
