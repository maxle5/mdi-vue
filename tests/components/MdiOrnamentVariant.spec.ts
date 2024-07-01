
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOrnamentVariant from "../../src/components/MdiOrnamentVariant.vue";

test("MdiOrnamentVariant snapshot", () => {
  const wrapper = mount(MdiOrnamentVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
