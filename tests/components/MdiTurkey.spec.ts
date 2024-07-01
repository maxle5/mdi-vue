
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTurkey from "../../src/components/MdiTurkey.vue";

test("MdiTurkey snapshot", () => {
  const wrapper = mount(MdiTurkey, {});
  expect(wrapper.html()).toMatchSnapshot();
});
