
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKodi from "../../src/components/MdiKodi.vue";

test("MdiKodi snapshot", () => {
  const wrapper = mount(MdiKodi, {});
  expect(wrapper.html()).toMatchSnapshot();
});
