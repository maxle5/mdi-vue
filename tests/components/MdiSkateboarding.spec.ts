
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkateboarding from "../../src/components/MdiSkateboarding.vue";

test("MdiSkateboarding snapshot", () => {
  const wrapper = mount(MdiSkateboarding, {});
  expect(wrapper.html()).toMatchSnapshot();
});
