
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVirus from "../../src/components/MdiVirus.vue";

test("MdiVirus snapshot", () => {
  const wrapper = mount(MdiVirus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
