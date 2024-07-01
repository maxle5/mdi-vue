
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLandFields from "../../src/components/MdiLandFields.vue";

test("MdiLandFields snapshot", () => {
  const wrapper = mount(MdiLandFields, {});
  expect(wrapper.html()).toMatchSnapshot();
});
