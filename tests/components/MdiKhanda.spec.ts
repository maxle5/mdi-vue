
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKhanda from "../../src/components/MdiKhanda.vue";

test("MdiKhanda snapshot", () => {
  const wrapper = mount(MdiKhanda, {});
  expect(wrapper.html()).toMatchSnapshot();
});
