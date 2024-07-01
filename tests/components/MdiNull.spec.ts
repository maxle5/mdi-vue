
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNull from "../../src/components/MdiNull.vue";

test("MdiNull snapshot", () => {
  const wrapper = mount(MdiNull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
