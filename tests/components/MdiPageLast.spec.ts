
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPageLast from "../../src/components/MdiPageLast.vue";

test("MdiPageLast snapshot", () => {
  const wrapper = mount(MdiPageLast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
