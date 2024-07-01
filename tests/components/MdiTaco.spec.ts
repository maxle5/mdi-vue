
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTaco from "../../src/components/MdiTaco.vue";

test("MdiTaco snapshot", () => {
  const wrapper = mount(MdiTaco, {});
  expect(wrapper.html()).toMatchSnapshot();
});
