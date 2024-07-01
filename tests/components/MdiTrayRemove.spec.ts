
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrayRemove from "../../src/components/MdiTrayRemove.vue";

test("MdiTrayRemove snapshot", () => {
  const wrapper = mount(MdiTrayRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
