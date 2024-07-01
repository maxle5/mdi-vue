
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProjectorScreenVariant from "../../src/components/MdiProjectorScreenVariant.vue";

test("MdiProjectorScreenVariant snapshot", () => {
  const wrapper = mount(MdiProjectorScreenVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
