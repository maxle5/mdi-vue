
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorPointPlus from "../../src/components/MdiVectorPointPlus.vue";

test("MdiVectorPointPlus snapshot", () => {
  const wrapper = mount(MdiVectorPointPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
