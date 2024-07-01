
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageTextFast from "../../src/components/MdiMessageTextFast.vue";

test("MdiMessageTextFast snapshot", () => {
  const wrapper = mount(MdiMessageTextFast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
