
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStamper from "../../src/components/MdiStamper.vue";

test("MdiStamper snapshot", () => {
  const wrapper = mount(MdiStamper, {});
  expect(wrapper.html()).toMatchSnapshot();
});
