
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDisc from "../../src/components/MdiDisc.vue";

test("MdiDisc snapshot", () => {
  const wrapper = mount(MdiDisc, {});
  expect(wrapper.html()).toMatchSnapshot();
});
