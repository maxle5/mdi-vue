
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeight from "../../src/components/MdiWeight.vue";

test("MdiWeight snapshot", () => {
  const wrapper = mount(MdiWeight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
