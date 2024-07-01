
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCharity from "../../src/components/MdiCharity.vue";

test("MdiCharity snapshot", () => {
  const wrapper = mount(MdiCharity, {});
  expect(wrapper.html()).toMatchSnapshot();
});
