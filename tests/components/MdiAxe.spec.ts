
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxe from "../../src/components/MdiAxe.vue";

test("MdiAxe snapshot", () => {
  const wrapper = mount(MdiAxe, {});
  expect(wrapper.html()).toMatchSnapshot();
});
