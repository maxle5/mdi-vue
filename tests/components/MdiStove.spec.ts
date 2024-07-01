
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStove from "../../src/components/MdiStove.vue";

test("MdiStove snapshot", () => {
  const wrapper = mount(MdiStove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
