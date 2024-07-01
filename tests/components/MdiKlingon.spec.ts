
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKlingon from "../../src/components/MdiKlingon.vue";

test("MdiKlingon snapshot", () => {
  const wrapper = mount(MdiKlingon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
