
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlien from "../../src/components/MdiAlien.vue";

test("MdiAlien snapshot", () => {
  const wrapper = mount(MdiAlien, {});
  expect(wrapper.html()).toMatchSnapshot();
});
