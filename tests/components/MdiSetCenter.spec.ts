
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSetCenter from "../../src/components/MdiSetCenter.vue";

test("MdiSetCenter snapshot", () => {
  const wrapper = mount(MdiSetCenter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
