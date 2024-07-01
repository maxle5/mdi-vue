
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLessThan from "../../src/components/MdiLessThan.vue";

test("MdiLessThan snapshot", () => {
  const wrapper = mount(MdiLessThan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
