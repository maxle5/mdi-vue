
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircularSaw from "../../src/components/MdiCircularSaw.vue";

test("MdiCircularSaw snapshot", () => {
  const wrapper = mount(MdiCircularSaw, {});
  expect(wrapper.html()).toMatchSnapshot();
});
