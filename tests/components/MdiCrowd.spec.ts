
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCrowd from "../../src/components/MdiCrowd.vue";

test("MdiCrowd snapshot", () => {
  const wrapper = mount(MdiCrowd, {});
  expect(wrapper.html()).toMatchSnapshot();
});
