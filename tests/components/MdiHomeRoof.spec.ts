
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeRoof from "../../src/components/MdiHomeRoof.vue";

test("MdiHomeRoof snapshot", () => {
  const wrapper = mount(MdiHomeRoof, {});
  expect(wrapper.html()).toMatchSnapshot();
});
