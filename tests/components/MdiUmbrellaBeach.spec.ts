
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUmbrellaBeach from "../../src/components/MdiUmbrellaBeach.vue";

test("MdiUmbrellaBeach snapshot", () => {
  const wrapper = mount(MdiUmbrellaBeach, {});
  expect(wrapper.html()).toMatchSnapshot();
});
