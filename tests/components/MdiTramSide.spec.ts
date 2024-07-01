
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTramSide from "../../src/components/MdiTramSide.vue";

test("MdiTramSide snapshot", () => {
  const wrapper = mount(MdiTramSide, {});
  expect(wrapper.html()).toMatchSnapshot();
});
