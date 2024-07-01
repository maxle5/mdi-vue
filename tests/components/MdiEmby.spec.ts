
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmby from "../../src/components/MdiEmby.vue";

test("MdiEmby snapshot", () => {
  const wrapper = mount(MdiEmby, {});
  expect(wrapper.html()).toMatchSnapshot();
});
