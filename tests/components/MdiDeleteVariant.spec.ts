
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteVariant from "../../src/components/MdiDeleteVariant.vue";

test("MdiDeleteVariant snapshot", () => {
  const wrapper = mount(MdiDeleteVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
