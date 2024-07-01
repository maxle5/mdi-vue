
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeVariant from "../../src/components/MdiHomeVariant.vue";

test("MdiHomeVariant snapshot", () => {
  const wrapper = mount(MdiHomeVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
