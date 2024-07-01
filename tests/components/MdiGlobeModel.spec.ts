
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGlobeModel from "../../src/components/MdiGlobeModel.vue";

test("MdiGlobeModel snapshot", () => {
  const wrapper = mount(MdiGlobeModel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
