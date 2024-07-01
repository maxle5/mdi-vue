
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMeteor from "../../src/components/MdiMeteor.vue";

test("MdiMeteor snapshot", () => {
  const wrapper = mount(MdiMeteor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
