
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSizeM from "../../src/components/MdiSizeM.vue";

test("MdiSizeM snapshot", () => {
  const wrapper = mount(MdiSizeM, {});
  expect(wrapper.html()).toMatchSnapshot();
});
