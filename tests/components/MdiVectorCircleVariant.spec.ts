
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorCircleVariant from "../../src/components/MdiVectorCircleVariant.vue";

test("MdiVectorCircleVariant snapshot", () => {
  const wrapper = mount(MdiVectorCircleVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
