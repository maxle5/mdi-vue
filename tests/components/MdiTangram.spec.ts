
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTangram from "../../src/components/MdiTangram.vue";

test("MdiTangram snapshot", () => {
  const wrapper = mount(MdiTangram, {});
  expect(wrapper.html()).toMatchSnapshot();
});
