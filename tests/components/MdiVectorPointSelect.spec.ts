
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorPointSelect from "../../src/components/MdiVectorPointSelect.vue";

test("MdiVectorPointSelect snapshot", () => {
  const wrapper = mount(MdiVectorPointSelect, {});
  expect(wrapper.html()).toMatchSnapshot();
});
